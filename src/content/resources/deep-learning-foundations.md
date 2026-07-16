## 为什么从这里开始

深度学习是 CV、NLP、具身智能的共同底座。与其追新模型，不如先把**张量、反向传播、CNN、Transformer** 吃透。下面是以官方教程和名校公开课为核心的系统路线。

## 阶段一：数学与直觉（约 1 周）

线性代数、微积分、概率论**够用即可**。强烈推荐先看 3Blue1Brown 神经网络系列，建立「梯度下降到底在干嘛」的几何直觉，再回头看公式就不慌。

## 阶段二：PyTorch 实战（约 2 周）

别一上来啃论文，先用 **PyTorch 官方教程**跑通：张量 → 自动求导 → `nn.Module` → 训练循环 → 保存加载。

```python
import torch, torch.nn as nn
model = nn.Sequential(nn.Linear(784,128), nn.ReLU(), nn.Linear(128,10))
loss_fn, opt = nn.CrossEntropyLoss(), torch.optim.Adam(model.parameters(), lr=1e-3)
for x, y in loader:
    opt.zero_grad(); loss_fn(model(x), y).backward(); opt.step()
```

## 阶段三：从 CNN 到 Transformer（约 3 周）

- **CNN**：看 CS231n 卷积章节，理解局部感知、权重共享、感受野；
- **Transformer**：读 *The Annotated Transformer* 逐行实现一遍，比看十篇讲解都深；
- 用 **Hugging Face Transformers** 把预训练模型用起来，理解 tokenizer 与 attention 接口。

## 阶段四：训一个自己的模型

选 CIFAR-10，从零训分类器，亲手调学习率、batch size、正则化，观察过拟合与泛化曲线。这一步建立的「手感」比看论文值钱。

## 权威信息源

1. **PyTorch 官方教程** — https://pytorch.org/tutorials/
2. **PyTorch 文档** — https://pytorch.org/docs/stable/index.html
3. **斯坦福 CS231n** — https://cs231n.stanford.edu/
4. **斯坦福 CS224n** — https://web.stanford.edu/class/cs224n/
5. **The Annotated Transformer** — http://nlp.seas.harvard.edu/annotated-transformer/
6. **Hugging Face 文档** — https://huggingface.co/docs
7. **3Blue1Brown 神经网络系列** — https://www.3blue1brown.com/topics/neural-networks
8. **fast.ai 实战课程** — https://www.fast.ai/