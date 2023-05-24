import * as httpRequest from '../utils/httpRequest';

export const getSuggest = async ({ page, perPage }) => {
    try {
      const res = await httpRequest.get("users/suggested", {
        params: { page, per_page: perPage },
      });
      return res.data;
      // setSearchResult(res.data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };