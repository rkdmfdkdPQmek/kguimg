// 버튼 요소 선택
const generateBtn = document.getElementById('generateBtn');
const gridContainer = document.getElementById('gridContainer'); // 이미지를 보여줄 컨테이너 선택

// 이미지 수를 세기 위한 변수
let imageCount = 0;

// 이벤트 핸들러 함수 정의
function handleButtonClick() {
    // 이미지가 30개면 확인 메시지 표시
    if (imageCount >= 30) {
        const confirmation = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니다?");
        if (confirmation) {
            // 확인을 선택한 경우 모든 이미지 삭제
            gridContainer.innerHTML = '';
            imageCount = 0; // 이미지 수 초기화
            return;
        } else {
            // 취소를 선택한 경우 아무 것도 하지 않음
            return;
        }
    }

    // 랜덤 숫자 생성 (1부터 1000까지)
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    // 새로운 이미지 요소 생성
    const img = document.createElement('img');
    img.src = `https://picsum.photos/500?random=${randomNumber}`; // 랜덤 이미지 URL 설정
    img.alt = '랜덤 이미지'; // 이미지 설명 설정    

    img.addEventListener('click', function() {
        gridContainer.removeChild(img); // 클릭한 이미지를 삭제
        imageCount--; // 이미지 수 감소
    });
    // gridContainer에 이미지 추가
    gridContainer.appendChild(img);
    imageCount++; // 이미지 수 증가
}

// 이벤트 리스너 추가
generateBtn.addEventListener('click', handleButtonClick);