import { User } from "@/modules/user/user.entity";
import { PrismaticRepository } from "@/modules/base/base.repository";
import {
  IPrismaticService,
  PrismaticAuth,
  PrismaticServiceOptions,
} from "@/interfaces/base";
import { PrismaticEntity } from "./base.entity";

/**
 * Base service for all services
 * @param {PrismaticServiceOptions} options
 * @returns {PrismaticRepository<T>}
 * @abstract
 * @class
 * @implements {IPrismaticService<T>}
 */
export abstract class PrismaticService<T extends PrismaticEntity>
  implements IPrismaticService<T>
{
  /**
   * Repository used for service operations
   * @private
   * @type {PrismaticRepository<T>}
   * @memberof PrismaticService
   */
  private _repository: PrismaticRepository<T>;

  /**
   * @param {PrismaticServiceOptions} options
   * @memberof PrismaticService
   * @constructor
   * @description Create a new instance of the service and initialize the repository
   */
  constructor({ auth }: PrismaticServiceOptions) {
    this._repository = this.initializeRepository({ auth });
  }
  /**
   *
   * @param {PrismaticAuth} auth The Prismatic authentication details
   * @returns {PrismaticRepository<T>} The repository for the service
   * @method
   * @description A hook for service implementations to initialize their repository
   */
  public initializeRepository({ auth }: PrismaticAuth): PrismaticRepository<T> {
    throw new Error("Method not implemented.");
  }

  /**
   *
   * @returns {Promise<PrismaticEntity<T>[]>}
   * @method
   * @description Find all items in the repository
   */
  public async find(): Promise<T[]> {
    return this._repository.find();
  }

  /**
   *
   * @param id: string
   * @returns {Promise<boolean>}
   * @method
   * @description Find a single item in the repository by id
   */
  public async findOne(id: string): Promise<T> {
    const result = this._repository.findOne(id);
    if (!result) {
      throw new Error("Failed to find item: " + id);
    }
    return result;
  }

  public async getUser(): Promise<User> {
    return this._repository.getUser();
  }
}
