import type { MessageState } from "@/types";
import { defineStore } from "pinia";
export const useMessageStore = defineStore('message', {
    state: () => ({
      message: ''
    }),
    actions: {
      resetMessage() {
        this.message = ''
      },
      updateMessage(newMessage: string) {
        this.message = newMessage
      }
    }
  })
