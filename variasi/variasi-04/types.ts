export interface FormData {
    name: string;
    email: string;
    status: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface PainPoint {
    title: string;
    description: string;
    citations: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
}
