export interface Contact {
    columns: Column[];
    source:  Source[];
}

export interface Column {
    header: string;
    field:  string;
}

export interface Source {
    name:   string;
    email:  string;
    phone:  string;
    owner?: Owner;
}

export interface Owner {
    firstName: string;
    lastName:  string;
}
