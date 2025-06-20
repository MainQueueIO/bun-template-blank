/**
 * Example function that returns a greeting message.
 * @param name - The name to include in the greeting. If not provided, defaults to 'at anonymous'.
 */
export const helloBlankTemplate = (name?: string) => {
  return ('Hello ' + (name ? name : '@anonymous') + '!').toLowerCase();
};
