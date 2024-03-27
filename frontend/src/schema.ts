import { Schema as S, or } from "@triplit/db";
import type { ClientSchema } from "@triplit/client";

export const schema = {
  delegations: {
    schema: S.Schema({
      id: S.Id(),
      delegatedTo: S.String(),
      createdBy: S.String(),
    }),
    rules: {
      read: {
        "is-created-by-or-delegated-to": {
          description:
            "A delegation can be read by the user who created it or by the user it's been delegated to",
          filter: [
            or([
              ["createdBy", "=", "$SESSION_USER_ID"],
              ["delegatedTo", "=", "$SESSION_USER_ID"],
            ]),
          ],
        },
      },
    },
  },
} satisfies ClientSchema;
