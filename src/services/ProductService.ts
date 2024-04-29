import http from "@/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/listing-company");
  }

  get(id: any) {
    return http.get(`/listing-company/${id}`);
  }

  create(data: any) {
    return http.post("/tutorials", data);
  }

  update(id: any, data: any) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();