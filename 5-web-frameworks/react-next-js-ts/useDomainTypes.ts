const enum DomainTypes {
    User,
    Project,
    Order,
    // ..
}

export type Image = {
    id: string;
    name: string;
    extension: string;
    size: number;
    is_profile_image: boolean;
    url: string;
    created_at: string;
};

export type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    image: string;
    initials: string;
    is_email_verified: boolean;
    created_at: string;
    updated_at: string;
    roles: {
        User: boolean;
        Manufacturer: boolean;
        Admin: boolean;
    };
    projects_count: { Prototyping: number; Market: number };
    profile_image_url: string;
};

export type Project = {
    id: string;
    title: string;
    description: string;
    price: number | undefined;
    owner_name: string;
    image: string;
    images: Image[];
    status: string;
    created_at: string;
    updated_at: string;
};

export type Order = {
    id: string;
}

export default DomainTypes;
