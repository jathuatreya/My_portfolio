"use client";
type ToastType = 'success' | 'custom';

export interface ToastEvent {
     id: string;
     type: ToastType;
     message?: string;
     component?: React.ReactNode;
     visible: boolean;
}

type Listener = (toasts: ToastEvent[]) => void;

let toasts: ToastEvent[] = [];
let listeners: Listener[] = [];

const emit = () => {
     listeners.forEach((listener) => listener([...toasts]));
};

export const toast = {
     success: (message: string) => {
          const id = Math.random().toString(36).substring(2, 9);
          const newToast: ToastEvent = { id, type: 'success', message, visible: true };
          toasts = [...toasts, newToast];
          emit();

          // Auto dismiss success toasts
          setTimeout(() => {
               toast.dismiss(id);
          }, 4000);

          return id;
     },
     custom: (renderer: (t: string) => React.ReactNode) => {
          const id = Math.random().toString(36).substring(2, 9);
          // Pass id to the renderer function so the component can dismiss itself
          const component = renderer(id);
          const newToast: ToastEvent = { id, type: 'custom', component, visible: true };
          toasts = [...toasts, newToast];
          emit();
          return id;
     },
     dismiss: (id: string) => {
          toasts = toasts.filter((t) => t.id !== id);
          emit();
     }
};

export const subscribe = (listener: Listener) => {
     listeners.push(listener);
     return () => {
          listeners = listeners.filter((l) => l !== listener);
     };
};
