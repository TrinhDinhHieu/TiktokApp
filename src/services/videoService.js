import * as httpRequest from '../utils/httpRequest';
export const getVideo = async (type, page) => {
    try {
      const res = await httpRequest.get("videos", {
        params: { type, page },
      });
      return res.data;
      // setSearchResult(res.data);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  };