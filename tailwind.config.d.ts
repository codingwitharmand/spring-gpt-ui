declare const _default: {
    content: string[];
    theme: {
        extend: {
            colors: {
                ink: string;
                paper: string;
                mist: string;
                fog: string;
                graphite: string;
                cloud: string;
            };
            fontFamily: {
                sans: [string, string, string, string];
                serif: [string, string, string];
                mono: [string, string, string, string];
            };
            boxShadow: {
                panel: string;
                soft: string;
            };
            animation: {
                rise: string;
                pulseDots: string;
            };
            keyframes: {
                rise: {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                pulseDots: {
                    "0%, 80%, 100%": {
                        opacity: string;
                        transform: string;
                    };
                    "40%": {
                        opacity: string;
                        transform: string;
                    };
                };
            };
        };
    };
    plugins: any[];
};
export default _default;
