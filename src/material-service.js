/**
 * Performs a GET request to the GeoGebra API.
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
function fetcher(url, params) {
  const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  const suffix = query ? `?${query}` : '';

  return fetch(`https://api.geogebra.org/v1.0${url}${suffix}`).then(r => r.json());
}

/**
 * Performs a GET request with parameters fixed for fetching materials.
 *
 * See: https://groot.geogebra.org:555/?url=https://groot.geogebra.org:5400/v1.0/openapi#/materials/Materials%5CController%5CMaterialController%3A%3AgetList
 * @param params equivalent with the parameters of GET /materials call
 * @returns {Promise<*>}
 */
export function fetchMaterials(params) {
  return fetcher('/materials', params);
}