declare global {
    interface Window {
        gtag: (
            command: 'event' | 'config' | 'js',
            targetId: string,
            config?: ControlParams | EventParams | CustomParams
        ) => void;
        gtag_report_conversion: (url?: string) => boolean;
        dataLayer: any[];
        google: any;
    }
}

interface ControlParams {
    groups?: string | string[];
    send_to?: string | string[];
    event_callback?: () => void;
    event_timeout?: number;
}

interface EventParams {
    checkout_option?: string;
    checkout_step?: number;
    content_id?: string;
    content_type?: string;
    coupon?: string;
    currency?: string;
    description?: string;
    fatal?: boolean;
    items?: any[];
    method?: string;
    number?: string;
    promotions?: any[];
    screen_name?: string;
    search_term?: string;
    shipping?: number;
    tax?: number;
    transaction_id?: string;
    value?: number;
    event_label?: string;
    event_category?: string;
}

interface CustomParams {
    [key: string]: any;
}

export { };
