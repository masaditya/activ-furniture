import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RESTORE_FAILED, RESTORE_TOKEN} from '../context/actionTypes';

export const useProductService = () => {
  const baseUrl = 'https://catalog.wlrapps.com/Api_app';
  const getAllProduct = async () => await axios.get(`${baseUrl}/product/all`);
  const getDetailProduct = async (id: any) =>
    await axios.get(`${baseUrl}/product/${id}`);

  const filterProductBrand = async (brand: {brand: string[]}) =>
    await axios.post(`${baseUrl}/product/all`, brand);
  const filterProductCategory = async (category: {category: string[]}) =>
    await axios.post(`${baseUrl}/product/all`, category);
  const getBanner = async () => axios.get(`${baseUrl}/banner`);
  const getPopup = async () => axios.get(`${baseUrl}/popup`);

  return {
    getAllProduct,
    getDetailProduct,
    filterProductBrand,
    filterProductCategory,
    getBanner,
    getPopup,
  } as const;
};

export const useBrandService = () => {
  const baseUrl = 'https://catalog.wlrapps.com/Api_app';
  const getAllBrand = async () => await axios.get(`${baseUrl}/master/brand`);
  const brandProduct = async (brand: {brand: string[]}) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('brand', JSON.stringify(brand));
    return await axios.post(`${baseUrl}/product/all`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const getAllCategory = async () =>
    await axios.get(`${baseUrl}/master/categories`);

  const categoryProduct = async (category: {category: string[]}) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('category', JSON.stringify(category));
    return axios.post(`${baseUrl}/product/all`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const filterProduct = async (
    brand: {brand: string[]},
    category: {category: string[]},
    series: {series: string},
  ) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('category', JSON.stringify(category));
    body.append('brand', JSON.stringify(brand));
    body.append('series', series.series);
    return await axios.post(`${baseUrl}/product/all`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const searchProduct = async (keyword: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('keyword', keyword);
    return await axios.post(`${baseUrl}/product/all`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const getSeries = async (brand_id: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('brand_id', brand_id);
    return await axios.post(`${baseUrl}/master/series`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const getSubCategory = async (id_kategori : string)=> {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('id_kategori', parseInt(id_kategori));
    return await axios.post(`${baseUrl}/master/categories`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  return {
    getAllBrand,
    brandProduct,
    getAllCategory,
    categoryProduct,
    filterProduct,
    searchProduct,
    getSeries,
    getSubCategory
  } as const;
};

export const useAuthService = () => {
  const baseUrl = 'https://catalog.wlrapps.com/Api_app';

  const loginUser = async (username: string, password: string) => {
    const body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);
    return await axios.post(`${baseUrl}/login`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };
  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (e) {}
    return await axios.post(`${baseUrl}/logout`);
  };
  const storeUsername = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
      return {
        type: 'LOGIN_SUCCESS',
        payload: {
          user: value,
        },
      };
    } catch (e) {
      // saving error
      return;
    }
  };
  const getUsername = async () => {
    let response = await AsyncStorage.getItem('user')
      .then((result) => {
        if (result) {
          return {
            type: RESTORE_TOKEN,
            payload: {
              user: JSON.parse(result),
            },
          };
        } else {
          return {
            type: RESTORE_FAILED,
            payload: {
              user: result != null ? JSON.parse(result) : null,
            },
          };
        }
      })
      .catch((error) => {
        return {};
      });
    return response;
  };

  const getUserInfo = async (username: string) =>
    axios.get(`${baseUrl}/get_user/${username}`);

  return {
    loginUser,
    logoutUser,
    getUserInfo,
    storeUsername,
    getUsername,
  } as const;
};

export const useBlogService = () => {
  const baseUrl = 'https://catalog.wlrapps.com/Api_app/blog';
  const getListBlog = async () => axios.get(`${baseUrl}/all`);
  const readBlog = async (id: string) => axios.get(`${baseUrl}/${id}`);
  const getBerita = async () => axios.get(`${baseUrl}/berita`);
  const getKatalog = async () => axios.get(`${baseUrl}/katalog`);

  const getBeritaByRole = async (role: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('role', role);
    return axios.post(`${baseUrl}/berita}`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };
  const getBeritaByKeyword = async (keyword: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('keyword', keyword);
    return axios.post(`${baseUrl}/berita`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const getKatalogByBrand = async (brand: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('brand', brand);
    return axios.post(`${baseUrl}/katalog`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  const getKatalogByKeyword = async (keyword: string) => {
    const body = new URLSearchParams();
    // @ts-ignore
    body.append('keyword', keyword);
    return axios.post(`${baseUrl}/katalog`, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  };

  return {
    getListBlog,
    readBlog,
    getBeritaByRole,
    getKatalogByBrand,
    getKatalogByKeyword,
    getBeritaByKeyword,
    getBerita,
    getKatalog,
  };
};

export const useAbout = () => {
  const baseUrl = 'https://catalog.wlrapps.com/Api_app/about_us';
  const getAbout = async () => axios.get(`${baseUrl}`);

  return {
    getAbout,
  };
};
