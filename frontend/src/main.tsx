import { TriplitClient } from "@triplit/client";
import { schema } from "./schema.ts";

const mockToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ3OWE1YjU3LTBmNTEtNDhkNS1iMGZmLTk0YmRiOGU0NTlkNCIsIngtdHJpcGxpdC11c2VyLWlkIjoiZDc5YTViNTctMGY1MS00OGQ1LWIwZmYtOTRiZGI4ZTQ1OWQ0IiwieC10cmlwbGl0LXByb2plY3QtaWQiOiJjcnZpZiIsIngtdHJpcGxpdC10b2tlbi10eXBlIjoiZXh0ZXJuYWwiLCJpYXQiOjE3MTE1MzA4ODQsImV4cCI6MTcxMjEzNTY4NH0.hbOxcbL60CLoworrkdX4emra4HzB9zdG_nqkYLrbGyw";

const db = new TriplitClient({
  serverUrl: "http://localhost:3000",
  schema: schema,
  token: mockToken,
});

const query = db
  .query("delegations")
  .select(["id", "delegatedTo", "createdBy"])
  .build();

const result = await db.fetch(query);
console.log(result);
