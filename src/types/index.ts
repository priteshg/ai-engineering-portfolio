export interface ArticleStub {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}
