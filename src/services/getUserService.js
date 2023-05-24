import * as httpRequest from '../utils/httpRequest';

export const getSuggest = async () => {
    try {
      const res = await httpRequest.get("auth/me");
      return res.data;
      // setSearchResult(res.data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };