function openPreview(imageSrc) {
    document.getElementById("previewModal").style.display = "block";
    document.getElementById("previewImage").src = imageSrc;
}

function closePreview() {
    document.getElementById("previewModal").style.display = "none";
}

// 点击模态框外部关闭预览
window.onclick = function(event) {
    let modal = document.getElementById("previewModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
