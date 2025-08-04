declare class metaData {
    countries: ({
        name: string;
        dial_code: string;
        code: string;
        sort_order: number;
        states?: undefined;
    } | {
        name: string;
        dial_code: string;
        code: string;
        sort_order: number;
        states: {
            name: string;
            abbreviation: string;
        }[];
    } | {
        name: string;
        dial_code: null;
        code: string;
        sort_order: number;
        states?: undefined;
    })[];
    menu_entries: {
        name: string;
        platform: string;
        active_icon: string;
        in_active_icon: string;
        order: string;
        route: string;
        context: string;
    }[];
    sso_config_keys: string[];
}
declare const _default: metaData;
export default _default;
