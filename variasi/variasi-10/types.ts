export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}
