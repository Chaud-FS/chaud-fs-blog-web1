## 计算机视觉的知识树

从图像分类、目标检测到实例分割，再到开放词汇分割，是一条清晰的能力进阶线。下面是官方文档与经典论文为核心的清单。

## 阶段一：图像分类与 CNN

先理解卷积、池化、感受野，再亲手训一个 ResNet。CS231n 卷积章节必读，配合 PyTorch 教程实现。

## 阶段二：目标检测

从 R-CNN 家族到 YOLO，理解「在哪里 + 是什么」。重点：**边界框回归**与**非极大值抑制（NMS）**——后者直接决定检测结果是否冗余。

## 阶段三：实例分割

在检测之上做像素级掩码。经典路线：Mask R-CNN → 基于 Transformer 的 DETR。理解「检测框」如何演变成「掩码」。用 **Ultralytics** 可直接跑通分割：

```bash
yolo train model=yolov8n-seg.pt data=coco8-seg.yaml epochs=10
```

## 阶段四：开放词汇分割（前沿）

用文本提示零样本分割任意类别，是最实用方向之一。**YOLOE** 把它做到实时，文档含文本 / 视觉 / 无提示三种模式。

## 怎么选指标

- **mAP** 看整体精度；
- **mask IoU** 看分割边缘质量；
- 实时场景额外看 **FPS** 与显存。

## 权威信息源

1. **Ultralytics（含 YOLOE）** — https://docs.ultralytics.com/models/yoe/
2. **Ultralytics 分割任务** — https://docs.ultralytics.com/tasks/segment/
3. **斯坦福 CS231n** — https://cs231n.stanford.edu/
4. **DETR 论文** — https://arxiv.org/abs/2005.12872
5. **Mask R-CNN 论文** — https://arxiv.org/abs/1703.06870
6. **CLIP（视觉-语言对齐）** — https://arxiv.org/abs/2103.00020
7. **Papers with Code** — https://paperswithcode.com/