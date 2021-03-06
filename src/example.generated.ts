import * as Types from "./__generated__/types";

import * as Urql from "@urql/preact";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ExampleQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ExampleQuery = {
  __typename?: "Query";
  examples: Array<{ __typename?: "Example"; id: number; title: string }>;
};

export const ExampleDocument = Urql.gql`
    query Example {
        examples {
            id
            title
        }
    }
`;

export function useExampleQuery(
  options: Omit<Urql.UseQueryArgs<ExampleQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<ExampleQuery>({ query: ExampleDocument, ...options });
}
