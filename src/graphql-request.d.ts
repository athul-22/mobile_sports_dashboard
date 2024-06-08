declare module 'graphql-request' {
    export function request<TData = any>(
      url: string,
      query: string,
      variables?: { [key: string]: any },
      headers?: { [key: string]: string }
    ): Promise<TData>;
    
    export function gql(literals: TemplateStringsArray, ...placeholders: any[]): string;
  }
  