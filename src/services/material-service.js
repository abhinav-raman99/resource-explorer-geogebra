/**
 * Performs a GET request to the GeoGebra API.
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
function _fetcher(url, params) {
  const query = Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
  const suffix = query ? `?${query}` : '';

  return fetch(`https://api.geogebra.org/v1.0${url}${suffix}`).then((r) =>
    r.json()
  );
}

/**
 * Makes the material object a bit more beautiful.
 * @param material
 * @returns {{thumbUrl: *}}
 * @private
 */
function _prepareMaterial(material) {
  return {
    ...material,
    thumbUrl: material.thumbUrl.replace('$1', ''),
  };
}

/**
 * Performs a GET request to fetch a list of public materials.
 *
 * See: https://groot.geogebra.org:555/?url=https://api.geogebra.org/v1.0/openapi#/materials/Materials%5CController%5CMaterialController%3A%3AgetList
 * @param params equivalent with the parameters of GET /materials call
 * @returns {Promise<*>}
 */
export function fetchMaterials(params) {
  return _fetcher('/materials', params).then((materials) =>
    materials.map(_prepareMaterial)
  );
}

/**
 * Performs a GET request to fetch a single material object.
 *
 * See: https://groot.geogebra.org:555/?url=https://api.geogebra.org/v1.0/openapi#/materials/Materials%5CController%5CMaterialController%3A%3Aget
 * @param id id of the material
 * @param params equivalent with the parameters of GET /materials/{id} call
 * @returns {Promise<*>}
 */
export function fetchMaterial(id, params) {
  return _fetcher(`/materials/${id}`, params).then(_prepareMaterial);
}
