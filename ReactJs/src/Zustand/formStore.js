import { create } from 'zustand';

const formStore = create((set) => ({

//& Initial state for form data

  formData: {
    name: '',
    email: '',
    password: ''
  },

//& Function to set a field value in the form data.

  setField: (field, value) => set((state) => ({
    formData: {
      ...state.formData,  
      [field]: value
    }
  })),
  resetForm: () => set(() => ({
    formData: {
      name: '',
      email: '',
      password: ''
    }
  }))
}));

export default formStore;
