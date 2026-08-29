export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
  
    publishedAt: string;
    readingTime: number;
  
    cover?: Media;
  
    categories: Category[];
    tags: Tag[];
  }