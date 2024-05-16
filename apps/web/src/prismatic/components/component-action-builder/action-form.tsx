import { Button } from "@repo/ui";
import type { FieldApi } from "@tanstack/react-form";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      <em>{field.state.meta.touchedErrors}</em>
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
interface FieldProps {
  key: string;
  label: string;
  type: string;
  required: boolean;
  defaultValue: string;
}
export default function ActionForm({ fields }: { fields: FieldProps[] }) {
  const form = useForm({
    defaultValues: fields.reduce((prev, field) => {
      prev[field.key] = field.defaultValue;
      return prev;
    }, {}),
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
    // Add a validator to support Zod usage in Form and Field
    validatorAdapter: zodValidator,
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        {fields.map((f) => (
          <form.Field
            name={f.key}
            validators={{
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => {
                    setTimeout(resolve, 1000);
                  });
                  return !value.includes("error");
                },
                {
                  message: "No 'error' allowed in first name",
                },
              ),
            }}
            key={f.key}
            // eslint-disable-next-line react/no-children-prop -- skip
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <div className="grid gap-y-2 py-2" key={f.key}>
                  <span className="block text-sm font-medium leading-6 text-foreground">
                    {f.label}
                  </span>
                  <input
                    className="ring-1 ring-border rounded-md p-1"
                    id={field.name}
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    type={f.type === "boolean" ? "checkbox" : "text"}
                    value={field.state.value}
                  />
                </div>
              );
            }}
          />
        ))}
        <form.Subscribe
          // eslint-disable-next-line react/no-children-prop -- skip
          children={([canSubmit, isSubmitting]) => (
            <Button disabled={!canSubmit} type="submit">
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        />
      </form>
    </div>
  );
}
