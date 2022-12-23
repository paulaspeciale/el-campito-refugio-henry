import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import pushCloudinary from './hooks/pushCloudinary';

const apiUrl = "http://localhost:3001";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(
        headers.get("Content-Range").toString().split("/").pop(),
        10
      ),
    }));
  },
  
  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: { ...json, id: json._id }, //!
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
    }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("Content-Range").split("/").pop(), 10),
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...json, id: json._id } })), // {...json, id: json._id}

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: async (resource, params) => {
    
    if (resource === "dogs") {      
      const urlsImages = await pushCloudinary(params.data.images);
      const urlVideo = await pushCloudinary(params.data.video);
      params.data.images = urlsImages;
      params.data.video = urlVideo;
      console.log(params.data);
    };
    if (resource === "users") {
      const urlsImage = await pushCloudinary(params.data.image);
      params.data.image = urlsImage;
      console.log(params.data);
    };
    if (resource === "interfaces") {      
      const urlsSlider = await pushCloudinary(params.data.slider);
      params.data.slider = urlsSlider;
      const urlimgNosotros = await pushCloudinary(params.data.imgNosotros);
      params.data.imgNosotros = urlimgNosotros;
      const urlimgColabora = await pushCloudinary(params.data.imgColabora);
      params.data.imgNosotros = urlimgColabora;
      const urlimgVoluntarios = await pushCloudinary(params.data.imgVoluntarios);
      params.data.imgNosotros = urlimgVoluntarios;      
      console.log(params.data);
    };
    if (resource === "press" && params.data.img) {
      const urlImg = await pushCloudinary(params.data.img);
      params.data.image = urlImg;
      console.log(params.data);
    };

    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json._id },
    }))
    },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      params: JSON.stringify(params.id),
    }).then(({ json }) => ({ ...json, id: json._id })), //data: {...json, id: json._id, }

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};

export default dataProvider;
