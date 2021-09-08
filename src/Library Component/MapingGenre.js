import React from "react";
import img from "../images/images.jpeg";

export default function MapingGenre({ genr }) {
  console.log(genr.name, "genre");
  return (
    <div className="gen">
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tt9i8F8WkH8R-PMVojhkNCKY28B_3aELOQ&usqp=CAU"
              alt="classic"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://static6.depositphotos.com/1103040/593/i/600/depositphotos_5932787-stock-photo-saxophonist-at-sunset.jpg"
              alt="Blues"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name2}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD0QTjhGlvIHEDZbvvKMQBVSqcXgPL7AbXw&usqp=CAU"
              alt="Jazz"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              {" "}
              <h2>{genr.name3}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/03/08/18/99/360_F_308189978_CtvYsmilaUzUBIR0jJF0irSX5aE16g69.jpg"
              alt="R&B"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h3>{genr.name4}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzFZmjjZLukISMxgZjK8YzDNmj5K0LlAvYQ&usqp=CAU"
              alt="rock and roll"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name5}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZepbSn52cdwGxuco29AZopdbO9UASYE_Gg&usqp=CAU"
              alt="gospel"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name6}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCszxKB9HBTW-lvTQRYL5rm0oOIVZMLziu1Q&usqp=CAU"
              alt="soul"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name7}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLhmMHDnrP9R83ceKb-x2NAPgyGuOeMASZw&usqp=CAU"
              alt="Rock"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name8}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/71rUot6zZ1L.png"
              alt="Metal"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name9}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://i.imgur.com/G9hSgXC.png"
              alt="Hadcore punk"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name10}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://amtshows.com/wp-content/uploads/2017/12/all-about-country-music-spotlight-on-guitar-cowboy-boots-and-cowboy-hat-300x199.jpg"
              alt="Country"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name11}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kn5oPm_Azg9jlwT_QzN2JHgAdxlLYVzt6g&usqp=CAU"
              alt="Funk"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name12}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://i.imgur.com/I8cLIfi.png"
              alt="Disco"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name13}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="http://arthouse.cat/wp-content/uploads/2020/12/musica-house-300x219.jpg"
              alt="house"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name14}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://previews.123rf.com/images/monsitj/monsitj1410/monsitj141000009/32372003-headphone-dj-turntable-techno-background-vector-illustration-for-techno-dance-music.jpg"
              alt="techno"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name15}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglgXZfmJDabET5YqaeXlaRr98IOOTm8f-pQ&usqp=CAU"
              alt="pop"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name16}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9cRINKM-0l4eTdn8jzSI0Ld3OOPFiZBUYg&usqp=CAU"
              alt="ska"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name17}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mq3opYm9bDA3XPn_C-DYgA7pE5JV9ykv6A&usqp=CAU"
              alt="Reggae"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name18}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlD5gbFlx8ArJ4ICQ9aB5DDcDdl6E5utKy4w&usqp=CAU"
              alt="Drum and Bass"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name19}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://lh3.googleusercontent.com/proxy/JBBZhH7_FEO76B6dQJlhWffzNXH95I25z-QS9CrKSIHsEBlt3bsMiN_V40iPJdqkEDxdVENh_PHERtZYKX_Ig4RNmpodKFlltBD-zzR0KCoTfpXh_pgtyp8G5TZVp4g"
              alt="garage"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name20}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/cp0/e15/q65/c15.0.64.64a/p64x64/418846_508669025857997_88821126_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=1YJfo5q8KocAX-9Dw0s&_nc_ht=scontent-lga3-1.xx&oh=86ef0a28541b3f9fedd9e79bd078eacf&oe=615C8B48"
              alt="Flamenco"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name21}</h2>
            </div>
          </div>
        </div>
      </div>



      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlNqQWr_wFBEdHadN45oPJ7SZuYTZvtvdjQ&usqp=CAU"
              alt="salsa"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name22}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2-GDbydZ_YO5ihy8mB-4sQzVB29NMxctBw&usqp=CAU"
              alt="Timba"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name23}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0nzRZXXcoO1rGOA78V2iKv-VsTtyWea1yg&usqp=CAU"
              alt="hip-hop"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name24}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1BD65jeWCjFkiSRpWbylupzkIDpO5tFaCw&usqp=CAU"
              alt="Reggaeton"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name25}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDuo59gG-3sY1NwL4A2Rkh1ajf2R7K978iQ&usqp=CAU"
              alt="Vocal"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name26}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/c/1/4/9/e848-e603-4eff-8d2f-e2da114c0a8e.jpg"
              alt="Instrumental"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name27}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://i.imgur.com/UePDDmx.png"
              alt="Pragmatic"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name28}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://cdn.trendhunterstatic.com/phpthumbnails/36/36546/36546_1_800.jpeg"
              alt="Furniture"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name29}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUEe367gH2mqrhRqqJ3EhFDi0rCJ_8GPXmA&usqp=CAU"
              alt="Soundtrack"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name30}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81TlECjMN5L._SX522_.jpg"
              alt="Rumba"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name31}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Iron_bells.JPG/150px-Iron_bells.JPG"
              alt="Yoruba"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name32}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://39zsbo2fj4og6a79534grq31-wpengine.netdna-ssl.com/wp-content/uploads/Depositphotos_74762549_xl-2015.jpg"
              alt="Chachacha"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name33}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://blog.xcaret.com/es/wp-content/uploads/2019/05/Portada-1-1280x640.jpg"
              alt="Son"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name34}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://reporter.rit.edu:8443/sites/pubDir/slideShow/10-14/301-791-988998152.jpg"
              alt="Kizomba"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name35}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkR8D8nJjjxqy1q5UdgQlPgRSMi6VP4xSGsw&usqp=CAU"
              alt="Bachata"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name36}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://i.imgur.com/eFj3CZu.png"
              alt="Merengue"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name37}</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="gen">
        <div className="productCarded">
          <div>
            <img
              src="https://www.goandance.com/es/media/images-manager/Blog/pareja-bailando-tango-canciones.jpg"
              alt="Tango"
              style={{ width: "350px", height: "400px", borderRadius: "5px" }}
            />
            <div>
              <h2>{genr.name38}</h2>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
