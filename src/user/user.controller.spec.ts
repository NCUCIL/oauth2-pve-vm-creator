import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ModuleMocker, MockFunctionMetadata } from "jest-mock";

const moduleMocker = new ModuleMocker(global);

describe("UserController", () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .useMocker(token => {
        const results = ["test1", "test2"];
        if (token === UserService) {
          return { findAll: jest.fn().mockResolvedValue(results) };
        }
        if (typeof token === "function") {
          const mockMetadata = moduleMocker.getMetadata(token) as MockFunctionMetadata<any, any>;
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);
          return new Mock();
        }
      })
      .compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  // describe('findUserId', () => {
  //   it('should return an array of cats', async () => {
  //     const result = ['test'];
  //     jest.spyOn(userService, 'findAll').mockImplementation(() => result);

  //     expect(await userController.findAll()).toBe(result);
  //   });
  // });
});
