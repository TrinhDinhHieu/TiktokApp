import * as httpRequest from '../utils/httpRequest';
export const getFollowing = async ({ page }) => {
  try {
    const res = await httpRequest.get("me/followings", {
      params: { page },
    });
    return res.data;
    // setSearchResult(res.data);
    // setLoading(false);
  } catch (error) {
    // setLoading(false);
    console.log(error);
  }
};