import { create } from "zustand";

export type SignupStep = "account" | "verification" | "password";

interface SignupFormData {
  name: string;
  email: string;
  verificationCode: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface SignupStore {
  currentStep: SignupStep;
  formData: Partial<SignupFormData>;
  setCurrentStep: (step: SignupStep) => void;
  updateFormData: (data: Partial<SignupFormData>) => void;
  resetForm: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const stepOrder: SignupStep[] = ["account", "verification", "password"];

export const useSignupStore = create<SignupStore>((set, get) => ({
  currentStep: "account",
  formData: {},

  setCurrentStep: (step) => set({ currentStep: step }),

  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetForm: () =>
    set({
      currentStep: "account",
      formData: {},
    }),

  goToNextStep: () => {
    const { currentStep } = get();
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      set({ currentStep: stepOrder[currentIndex + 1] });
    }
  },

  goToPreviousStep: () => {
    const { currentStep } = get();
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      set({ currentStep: stepOrder[currentIndex - 1] });
    }
  },
}));
