interface GtagEventParams {
    send_to: string;
    event_callback?: () => void;
    [key: string]: any;
}

interface Window {
    gtag: (
        command: 'event' | 'config' | 'js',
        target: string,
        params?: GtagEventParams | { [key: string]: any }
    ) => void;
    gtag_report_conversion: (url?: string) => boolean;
    dataLayer: any[];
}

declare var gtag: (
    command: 'event' | 'config' | 'js',
    target: string,
    params?: GtagEventParams | { [key: string]: any }
) => void;

declare function gtag_report_conversion(url?: string): boolean;
