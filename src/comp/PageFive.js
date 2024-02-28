import React from "react";
import "./CSS/PageFive.css";

function PageFive() {
  return (
    <div className="container-fluid">
      <div className="heading">
        <h1 className="p1h">05</h1>
        <h4>Cards</h4>
        <p>___________</p>
      </div>
      <div className="row rr5">
        <div class="row r5 row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://sneakernews.com/wp-content/uploads/2021/10/air-jordan-1-retro-high-og-rebellionaire-release-datea.jpg?w=780&h=550&crop=1"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, consequuntur voluptate quo assumenda odio neque dicta
                  quas dolorem debitis excepturi porro soluta ipsum laboriosam
                  ipsa vel magnam voluptas doloremque? Eius.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://i0.wp.com/musicphotolife.com/wp-content/uploads/2017/01/Sennheiser-PXC550-2.jpg?resize=1170%2C780&ssl=1"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae labore a voluptatem, fuga quos at adipisci quo
                  obcaecati dolorem dolorum minus quisquam esse cupiditate
                  repellat hic vero in maiores ut?
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoZogTy7f4l_8jxdZNWZmxIgotMIrS430pOgYVOnnkIxm22aB"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  excepturi in soluta, architecto alias nostrum quasi nihil
                  quidem sit distinctio deserunt quae tempore vitae quisquam
                  doloribus exercitationem fugit numquam a.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
