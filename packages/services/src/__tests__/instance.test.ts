import { Role } from "@/interfaces/base";
import { InstanceRepository } from "@/modules/instance/instance.repository";
import { InstanceService } from "@/modules/instance/instance.service";
import { assert } from "console";

describe("Instance", () => {
  const service = new InstanceService({
    auth: {
      customerId: "123456",
      accessToken: "",
      // role: Role.Admin,
      // userId: "abc-123",
    },
  });
  it("Should query for instances from the repository", async () => {
    const respository = new InstanceRepository({
      auth: {
        customerId: "123456",
        role: Role.Admin,
        userId: "abc-123",
      },
    });

    const allInstances = await respository.find();
    expect(allInstances.length).toBeGreaterThan(0);
    const instance = await respository.findOne(allInstances[0]);
    expect(instance).toBeDefined();
  });
  it("test the instance service", async () => {
    const record = (await service.find())[0];
    record.flows["1"];
    const enabled = await service.enable(record);

    service.invokeFlow(record.flows[0], {});
    console.log(JSON.stringify(record, null, 2));
    // const result = await service.invokeFlow(record.flows[0], {
    //   hello: "world",
    // });
  });
});
