export interface Test {
    id?: number;
    generalInformations: {
        status: string,
        name: string,
        image: string,
        description: string,
    };
    channelSettings: {
        name: string,
        description: string,
        type: string,
        duration: string
    };
    sniffSetup: {
        name: string,
        code: string
    }
}