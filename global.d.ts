interface Window {
    grecaptcha: {
        ready: (callback: () => void) => void;
        render: (container: HTMLElement, parameters: any) => void;
    };
}