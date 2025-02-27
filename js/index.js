document.addEventListener('DOMContentLoaded', function() {
    // 이미지 카드에 애니메이션 효과 추가
    const imageCards = document.querySelectorAll('.image-card');

    // 각 이미지 카드에 이벤트 리스너 추가
    imageCards.forEach((card, index) => {
        // 이미지 로딩 상태 확인
        const img = card.querySelector('img');

        // 이미지가 로드되지 않았을 경우 오류 처리
        img.addEventListener('error', function() {
            console.log(`이미지 ${index + 1}를 로드하는데 실패했습니다.`);
            this.src = './images/placeholder.png'; // 플레이스홀더 이미지로 대체
        });
    });

    // 댓글 작성 처리
    const commentForm = document.querySelector('.comment-writing-container form');
    const commentList = document.querySelector('.comment-list');

    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
        });

        const submitButton = commentForm.querySelector('button[type="button"]');
        if (submitButton) {
            submitButton.addEventListener('click', function() {
                const inputField = commentForm.querySelector('input[type="text"]');
                const commentText = inputField.value.trim();

                if (commentText) {
                    // 새 댓글 생성
                    const newComment = document.createElement('li');
                    newComment.innerHTML = `
            <div class="comment-item">
              <div class="comment-author">
                <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지"/>
                <span>방문자</span>
              </div>
              <div class="comment-content">
                ${commentText}
              </div>
            </div>
          `;

                    // 댓글 목록 맨 위에 추가
                    commentList.insertBefore(newComment, commentList.firstChild);

                    // 폼 초기화
                    inputField.value = '';
                }
            });
        }
    }

    // 컨텐츠 메뉴 클릭 시 스크롤 이동
    const contentLinks = document.querySelectorAll('.contents a');

    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetSelector = this.getAttribute('href');
            let targetElement;

            if (targetSelector.startsWith('#')) {
                targetElement = document.querySelector(targetSelector);
            } else {
                targetElement = document.querySelector(targetSelector);
            }

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    console.log('페이지가 성공적으로 로드되었습니다.');
});
