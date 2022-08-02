export interface Dashboard {
    page_visites:   PageVisites;
    social_traffic: SocialTraffic;
}

export interface PageVisites {
    columns: PageVisitesColumn[];
    source:  PageVisitesSource[];
}

export interface PageVisitesColumn {
    header: string;
    field:  string;
}

export interface PageVisitesSource {
    name:   string;
    job:    string;
    age:    string;
    phone?: string;
}

export interface SocialTrafficSource {
    name:   string;
    job:    string;
    age:    string;
    phone?: string;
}

export interface SocialTraffic {
    columns: SocialTrafficColumn[];
    source:  SocialTrafficSource[];
}

export interface SocialTrafficColumn {
    header: string;
    field:  string;
    view?:  string;
}
