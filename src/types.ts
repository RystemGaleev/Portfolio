export interface IProjectProps {
  site: string | undefined;
  id?: number | string;
  link: string;
  descrRu?: string;
  descrEn?: string;
  image: string;
  titleRu: string;
  titleEn: string;
  screens: string[];
}

export interface IMyWorks {
  id: number;
  title: string;
  subtitle: string;
  dutiesList?: string[];
  stack: string;
  date: string;
}
