const $ = (querySelector) => {
  return document.querySelector(querySelector)
}

let TTSV_default = {
  fullName: "Nguyễn Việt Anh",
  gender: "Nam",
  enterYear: "2021",
  className: "Khoa học máy tính 05-K66",
  eduLevel: "Học đại trà",
  course: "66",
  program: "Khoa học Máy tính 2021",
  email: "Anh.NV215308@sis.hust.edu.vn",
  facultyInstitute: "Trường Công nghệ thông tin và Truyền thông",
  studyStatus: "Học"
}

const container = $("#container")
function setData(a) {
  container.innerHTML = `
  <div class="special-text info-title"> 
      <p>Họ và tên&emsp;: <span class="info-content">${a.fullName}</span></p>
      <p>Năm vào trường&emsp;: <span class="info-content">${a.enterYear}</span></p>
      <p>Bậc đào tạo&emsp;: <span class="info-content">${a.eduLevel}</span></p>
      <p>Chương trình&emsp;: <span class="info-content">${a.program}</span></p>
      <p>Khoa/Viện quản lý&emsp;: <span class="info-content">${a.facultyInstitute}</span></p>
      <p>Tình trạng học tập&emsp;: <span class="info-content">${a.studyStatus}</span></p>
  </div>
  <div class="info-title">
      <p>Giới tính&emsp;: <span class="info-content">${a.gender}</span></p>
      <p>Lớp&emsp;: <span class="info-content">${a.className}</span></p>
      <p>Khóa học&emsp;: <span class="info-content">${a.course}</span></p>
      <p>Email&emsp;: <span class="info-content">${a.email}</span></p>
  </div>
  `
}

var TTSV = { ...TTSV_default }

setData(TTSV_default)

var editBtn = $("#editBtn")
var submitBtn = $("#submit-btn")
var cancelBtn = $("#cancel-btn")
var resetBtn = $("#resetBtn")
let changeImageContainer = $('#change-image-container')
let image = $(".student-image")
let defaultImage = getComputedStyle(image).backgroundImage


var btnGroup = $("#btn-group")

editBtn.addEventListener("click", (e) => {
  e.preventDefault()

  btnGroup.innerHTML = `
  <div id='submit-btn'>< OK ></div>
  <div id='cancel-btn'>< Cancel ></div>
  <div id='resetBtn'>< Reset ></div>
  `
  submitBtn = $("#submit-btn")
  cancelBtn = $("#cancel-btn")
  resetBtn = $("#resetBtn")

  changeImageContainer.innerHTML = `
  <label id="change-image-btn" for="input-file">Thay đổi hình ảnh</label>
  <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
  `

  let inputFile = $("#input-file")
  let oldImage = getComputedStyle(image).backgroundImage
  inputFile.onchange = function () {
    const newImage = URL.createObjectURL(inputFile.files[0])
    image.style.backgroundImage = `url(${newImage})`
  }

  addEventListenerToBtns(submitBtn, cancelBtn, resetBtn, image, oldImage)

  container.innerHTML = `
  <div class="special-text info-title"> 
      <p>Họ và tên&emsp;: <input class="info-content" id='fullName' value='${TTSV.fullName}'></input></p>
      <p>Năm vào trường&emsp;: <input class="info-content" id='enterYear' value='${TTSV.enterYear}'></input></p>
      <p>Bậc đào tạo&emsp;: 
        <select class="info-content" id='eduLevel'>
          <option value="Học đại trà" ${TTSV.eduLevel === 'Học đại trà' ? 'selected' : ''}>Học đại trà</option>
          <option value="Học chất lượng cao" ${TTSV.eduLevel === 'Học chất lượng cao' ? 'selected' : ''}>Học chất lượng cao</option>
        </select>
      </p>
      <p>Chương trình&emsp;: <input class="info-content" id='program' value='${TTSV.program}'></input></p>
      <p>Khoa/Viện quản lý&emsp;: 
      <select class="info-content" id='facultyInstitute'>
        <option value="Trường Công nghệ thông tin và Truyền thông" ${TTSV.facultyInstitute === 'Trường Công nghệ thông tin và Truyền thông' ? 'selected' : ''}>Trường Công nghệ thông tin và Truyền thông</option>
        <option value="Trường Cơ khí" ${TTSV.facultyInstitute === 'Trường Cơ khí' ? 'selected' : ''}>Trường Cơ khí</option>
        <option value="Trường Điện - Điện tử" ${TTSV.facultyInstitute === 'Trường Điện - Điện tử' ? 'selected' : ''}>Trường Điện - Điện tử</option>
        <option value="Trường Hoá và Khoa học sự sống" ${TTSV.facultyInstitute === 'Trường Hoá và Khoa học sự sống' ? 'selected' : ''}>Trường Hoá và Khoa học sự sống</option>
        <option value="Trường Vật liệu" ${TTSV.facultyInstitute === 'Trường Vật liệu' ? 'selected' : ''}>Trường Vật liệu</option>
        <option value="Khoa Toán - Tin" ${TTSV.facultyInstitute === 'Khoa Toán - Tin' ? 'selected' : ''}>Khoa Toán - Tin</option>
        <option value="Khoa Vật lý Kỹ thuật" ${TTSV.facultyInstitute === 'Khoa Vật lý Kỹ thuật' ? 'selected' : ''}>Khoa Vật lý Kỹ thuật</option>
        <option value="Viện Kinh tế và Quản lý" ${TTSV.facultyInstitute === 'Viện Kinh tế và Quản lý' ? 'selected' : ''}>Viện Kinh tế và Quản lý</option>
        <option value="Khoa Ngoại ngữ" ${TTSV.facultyInstitute === 'Khoa Ngoại ngữ' ? 'selected' : ''}>Khoa Ngoại ngữ</option>
        <option value="Khoa Khoa học và Công nghệ Giáo dục" ${TTSV.facultyInstitute === 'Khoa Khoa học và Công nghệ Giáo dục' ? 'selected' : ''}>Khoa Khoa học và Công nghệ Giáo dục</option>
        <option value="Khoa Giáo dục Quốc phòng & An ninh" ${TTSV.facultyInstitute === 'Khoa Giáo dục Quốc phòng & An ninh' ? 'selected' : ''}>Khoa Giáo dục Quốc phòng & An ninh</option>
        <option value="Khoa Giáo dục Thể chất" ${TTSV.facultyInstitute === 'Khoa Giáo dục Thể chất' ? 'selected' : ''}>Khoa Giáo dục Thể chất</option>
        <option value="Khoa Lý luận Chính trị" ${TTSV.facultyInstitute === 'Khoa Lý luận Chính trị' ? 'selected' : ''}>Khoa Lý luận Chính trị</option>
    </select>
  
      </p>
      <p>Tình trạng học tập&emsp;: 
      <select class="info-content" id='studyStatus'>
        <option value="Học" ${TTSV.studyStatus === 'Học' ? 'selected' : ''}>Học</option>
        <option value="Tốt nghiệp" ${TTSV.studyStatus === 'Tốt nghiệp' ? 'selected' : ''}>Tốt nghiệp</option>
      </select>
  
      </p>
  </div>
  <div class="info-title">
      <p>Giới tính&emsp;: 
      <select class="info-content" id='gender'>
        <option value="Nam" ${TTSV.gender === 'Nam' ? 'selected' : ''}>Nam</option>
        <option value="Nữ" ${TTSV.gender === 'Nữ' ? 'selected' : ''}>Nữ</option>
      </select>
  
      </p>
      <p>Lớp&emsp;: <input class="info-content" id='className' value='${TTSV.className}'></input></p>
      <p>Khóa học&emsp;: 
      <select class="info-content" id='course'>
        <option value="66" ${TTSV.course === '66' ? 'selected' : ''}>66</option>
        <option value="65" ${TTSV.course === '65' ? 'selected' : ''}>65</option>
        <option value="64" ${TTSV.course === '64' ? 'selected' : ''}>64</option>
        <option value="63" ${TTSV.course === '63' ? 'selected' : ''}>63</option>
        <option value="62" ${TTSV.course === '62' ? 'selected' : ''}>62</option>
        <option value="61" ${TTSV.course === '61' ? 'selected' : ''}>61</option>
        <option value="60" ${TTSV.course === '60' ? 'selected' : ''}>60</option>
        <option value="59" ${TTSV.course === '59' ? 'selected' : ''}>59</option>
        <option value="58" ${TTSV.course === '58' ? 'selected' : ''}>58</option>
        <option value="57" ${TTSV.course === '57' ? 'selected' : ''}>57</option>
        <option value="56" ${TTSV.course === '56' ? 'selected' : ''}>56</option>
        <option value="55" ${TTSV.course === '55' ? 'selected' : ''}>55</option>
        <option value="54" ${TTSV.course === '54' ? 'selected' : ''}>54</option>
        <option value="53" ${TTSV.course === '53' ? 'selected' : ''}>53</option>
        <option value="52" ${TTSV.course === '52' ? 'selected' : ''}>52</option>
        <option value="51" ${TTSV.course === '51' ? 'selected' : ''}>51</option>
        <option value="50" ${TTSV.course === '50' ? 'selected' : ''}>50</option>
        <option value="49" ${TTSV.course === '49' ? 'selected' : ''}>49</option>
        <option value="48" ${TTSV.course === '48' ? 'selected' : ''}>48</option>
        <option value="47" ${TTSV.course === '47' ? 'selected' : ''}>47</option>
        <option value="46" ${TTSV.course === '46' ? 'selected' : ''}>46</option>
        <option value="45" ${TTSV.course === '45' ? 'selected' : ''}>45</option>
        <option value="44" ${TTSV.course === '44' ? 'selected' : ''}>44</option>
        <option value="43" ${TTSV.course === '43' ? 'selected' : ''}>43</option>
        <option value="42" ${TTSV.course === '42' ? 'selected' : ''}>42</option>
        <option value="41" ${TTSV.course === '41' ? 'selected' : ''}>41</option>
        <option value="40" ${TTSV.course === '40' ? 'selected' : ''}>40</option>
        <option value="39" ${TTSV.course === '39' ? 'selected' : ''}>39</option>
        <option value="38" ${TTSV.course === '38' ? 'selected' : ''}>38</option>
        <option value="37" ${TTSV.course === '37' ? 'selected' : ''}>37</option>
        <option value="36" ${TTSV.course === '36' ? 'selected' : ''}>36</option>
        <option value="35" ${TTSV.course === '35' ? 'selected' : ''}>35</option>
        <option value="34" ${TTSV.course === '34' ? 'selected' : ''}>34</option>
        <option value="33" ${TTSV.course === '33' ? 'selected' : ''}>33</option>
        <option value="32" ${TTSV.course === '32' ? 'selected' : ''}>32</option>
        <option value="31" ${TTSV.course === '31' ? 'selected' : ''}>31</option>
        <option value="30" ${TTSV.course === '30' ? 'selected' : ''}>30</option>
        <option value="29" ${TTSV.course === '29' ? 'selected' : ''}>29</option>
        <option value="28" ${TTSV.course === '28' ? 'selected' : ''}>28</option>
        <option value="27" ${TTSV.course === '27' ? 'selected' : ''}>27</option>
        <option value="26" ${TTSV.course === '26' ? 'selected' : ''}>26</option>
        <option value="25" ${TTSV.course === '25' ? 'selected' : ''}>25</option>
        <option value="24" ${TTSV.course === '24' ? 'selected' : ''}>24</option>
        <option value="23" ${TTSV.course === '23' ? 'selected' : ''}>23</option>
        <option value="22" ${TTSV.course === '22' ? 'selected' : ''}>22</option>
        <option value="21" ${TTSV.course === '21' ? 'selected' : ''}>21</option>
        <option value="20" ${TTSV.course === '20' ? 'selected' : ''}>20</option>
        <option value="19" ${TTSV.course === '19' ? 'selected' : ''}>19</option>
        <option value="18" ${TTSV.course === '18' ? 'selected' : ''}>18</option>
        <option value="17" ${TTSV.course === '17' ? 'selected' : ''}>17</option>
        <option value="16" ${TTSV.course === '16' ? 'selected' : ''}>16</option>
        <option value="15" ${TTSV.course === '15' ? 'selected' : ''}>15</option>
        <option value="14" ${TTSV.course === '14' ? 'selected' : ''}>14</option>
        <option value="13" ${TTSV.course === '13' ? 'selected' : ''}>13</option>
        <option value="12" ${TTSV.course === '12' ? 'selected' : ''}>12</option>
        <option value="11" ${TTSV.course === '11' ? 'selected' : ''}>11</option>
        <option value="10" ${TTSV.course === '10' ? 'selected' : ''}>10</option>
        <option value="9" ${TTSV.course === '9' ? 'selected' : ''}>9</option>
        <option value="8" ${TTSV.course === '8' ? 'selected' : ''}>8</option>
        <option value="7" ${TTSV.course === '7' ? 'selected' : ''}>7</option>
        <option value="6" ${TTSV.course === '6' ? 'selected' : ''}>6</option>
        <option value="5" ${TTSV.course === '5' ? 'selected' : ''}>5</option>
        <option value="4" ${TTSV.course === '4' ? 'selected' : ''}>4</option>
        <option value="3" ${TTSV.course === '3' ? 'selected' : ''}>3</option>
        <option value="2" ${TTSV.course === '2' ? 'selected' : ''}>2</option>
        <option value="1" ${TTSV.course === '1' ? 'selected' : ''}>1</option>
        <option value="0" ${TTSV.course === '0' ? 'selected' : ''}>0</option>
      </select>
  
      </p>
      <p>Email&emsp;: <input class="info-content" id='email' value='${TTSV.email}'></input></p>
  </div>
  `
})

function addEventListenerToBtns(submitBtn, cancelBtn, resetBtn, image, oldImage) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    var name = $("#fullName").value;
    var gender = $("#gender").value;
    var enterYear = $("#enterYear").value;
    var className = $("#className").value;
    var eduLevel = $("#eduLevel").value;
    var course = $("#course").value;
    var program = $("#program").value;
    var email = $("#email").value;
    var facultyInstitute = $("#facultyInstitute").value;
    var studyStatus = $("#studyStatus").value;

    TTSV.fullName = name
    TTSV.gender = gender
    TTSV.enterYear = enterYear
    TTSV.className = className
    TTSV.eduLevel = eduLevel
    TTSV.course = course
    TTSV.program = program
    TTSV.email = email
    TTSV.facultyInstitute = facultyInstitute
    TTSV.studyStatus = studyStatus
    setData(TTSV)
    btnGroup.innerHTML = ''
    changeImageContainer.innerHTML = ''
    console.log(">>> TTSV after click OK: ", TTSV)
  })

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()

    setData(TTSV)
    btnGroup.innerHTML = ''
    image.style.backgroundImage = oldImage
    changeImageContainer.innerHTML = ''
    console.log(">>> TTSV after click Cancel: ", TTSV)
  })

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault()

    setData(TTSV_default)
    TTSV = { ...TTSV_default }
    btnGroup.innerHTML = ''
    image.style.backgroundImage = defaultImage
    changeImageContainer.innerHTML = ''
    console.log(">>> TTSV after click Reset: ", TTSV)
  })
}