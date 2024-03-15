import { Button, ColorInput, Grid, TextInput, Title } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classNames from "classnames";
import moment from "moment";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Settings = {
  title: string;
  email: string;
  color: string;
  date: string;
};
export function Settings() {
  const { handleSubmit, control, setValue } = useForm<Settings>({
    defaultValues: {
      title: "",
      email: "",
      color: "",
      date: ""
    }
  });
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Settings> = (data) => {
    setIsDirty(false);
    console.log(data);
  };

  const handleChangeFieldValue = (field: keyof Settings, value: string) => {
    setIsDirty(true);
    setValue(field, value);
  };
  return (
    <>
      <Title order={2} classNames={{ root: "text-custom-blue text-left" }}>
        Settings
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid columns={2} w={700} classNames={{ root: "mt-10 ml-6" }}>
          <Grid.Col span={1}>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <TextInput
                  label="Title"
                  classNames={{ root: "flex flex-col items-start max-w-[55%]" }}
                  value={field.value}
                  onChange={(e) => handleChangeFieldValue("title", e.target.value)}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={1}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextInput
                  label="Email"
                  classNames={{ root: "flex flex-col items-start max-w-[55%] " }}
                  value={field.value}
                  onChange={(e) => handleChangeFieldValue("email", e.target.value)}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={1}>
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <ColorInput
                  label="Background Color"
                  classNames={{ root: "flex flex-col items-start max-w-[55%]" }}
                  value={field.value}
                  onChange={(data) => handleChangeFieldValue("color", data)}
                />
              )}
            />
          </Grid.Col>

          <Grid.Col span={1}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DateInput
                  label="Active Date"
                  placeholder="Date input"
                  classNames={{ root: "flex flex-col items-start max-w-[55%]" }}
                  value={field.value ? moment(field.value).toDate() : undefined}
                  onChange={(data) => handleChangeFieldValue("date", data?.toDateString() ?? "")}
                />
              )}
            />
          </Grid.Col>

          <Button
            type="submit"
            classNames={{
              root: classNames("ml-2 mt-5", {
                "!hidden": !isDirty
              })
            }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
}
