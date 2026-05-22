class ReportBuilder {
  constructor() {
    this.report = {};
  }

  setUser(userId, userName, userEmail) {
    this.report.userId = userId;
    this.report.userName = userName;
    this.report.userEmail = userEmail;
    return this;
  }

  setBasicInfo(title, description, location) {
    this.report.title = title;
    this.report.description = description;
    this.report.location = location;
    return this;
  }

  setCoordinates(latitude, longitude) {
    this.report.latitude = latitude;
    this.report.longitude = longitude;
    return this;
  }

  setCategory(category = 'bache') {
    this.report.category = category || 'bache';
    return this;
  }

  setPriority(priority = 'media') {
    this.report.priority = priority || 'media';
    return this;
  }

  setImages(images = []) {
    this.report.images = images || [];
    return this;
  }

  build() {
    return this.report;
  }
}

export default ReportBuilder;