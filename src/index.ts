export const helloBlankTemplate = (name?: string) => {
    return ("Hello " + (name ? name : "@anonymous") + "!").toLowerCase();
};