import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default {
  // GET /api/news/ - получить все новости
  getNews() {
    return apiClient.get('/news/');
  },
  // POST /api/news/ - создать новую новость
  createNews(newsData) {
    return apiClient.post('/news/', newsData);
  },
  // GET /api/news/{id}/ - получить одну новость
  getNewsById(id) {
    return apiClient.get(`/news/${id}/`);
  },
  // PUT /api/news/{id}/ - обновить новость
  updateNews(id, newsData) {
    return apiClient.put(`/news/${id}/`, newsData);
  },
  // DELETE /api/news/{id}/ - удалить новость
  deleteNews(id) {
    return apiClient.delete(`/news/${id}/`);
  },
  getTeachers() {
  return apiClient.get('/teachers/');
  },
  getStudents() {
  return apiClient.get('/students/');
  },
  getAlumni() {
  return apiClient.get('/alumni/');
  },
  getNewsById(id) {
    return apiClient.get(`/news/${id}/`);
  }
};

