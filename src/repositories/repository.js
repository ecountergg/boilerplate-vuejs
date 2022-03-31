import axios from "plugins/axios";

import { exampleRepository } from "repositories";

export const api = {
  example: exampleRepository(axios),
};
