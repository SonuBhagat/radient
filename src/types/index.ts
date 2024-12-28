export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  link: string;

}

export interface NavLink {
  title: string;
  path: string;
  subLinks?: NavLink[];
}