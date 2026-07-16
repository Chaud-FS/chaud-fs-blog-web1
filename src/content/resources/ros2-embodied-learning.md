## 具身智能在学什么

具身智能 = 机器人学 + 感知 + 决策。需要既懂**运动规划**（臂怎么动），又懂**多模态感知**（怎么看懂世界），还要用 LLM 把二者串起来。下面以 ROS2 / MoveIt2 官方资料为主的学习地图。

## 阶段一：ROS2 基础（约 2 周）

ROS2 是现代机器人通信事实标准。先搞懂：

- **节点（Node）** 与 **话题 / 服务** 通信模型；
- **Launch** 文件编排多节点；
- 用 **Gazebo** 搭仿真世界，别一上来碰硬件。

> 官方「初学者教程」务必全部敲一遍，概念密度高但权威。

## 阶段二：运动规划 MoveIt2（约 2 周）

MoveIt2 负责：逆运动学（IK）、运动规划（避障、平滑轨迹）、抓取（Pick & Place）。建议先跑官方 Demo，再换自己的 URDF 模型。

## 阶段三：把感知接进来

- 用 **RGB-D 相机**取点云与深度；
- 用视觉模型（如 Qwen-VL）做目标识别定位；
- 把「看到的结果」转成规划器可用的坐标（注意坐标系对齐）。

## 阶段四：LLM 决策编排

最后用 LLM 作「大脑」，把视觉、语音、运动状态统一成上下文，输出结构化动作序列。关键是**坐标系对齐**与**失败降级**。

## 练习建议

1. 在 Gazebo 里让机械臂碰到指定坐标；
2. 接 RGB-D 做简单抓取；
3. 用 LLM 输出 JSON 动作序列驱动 MoveIt2。

## 权威信息源

1. **ROS2 官方文档** — https://docs.ros.org/en/jazzy/
2. **MoveIt2 官网** — https://moveit.ros.org/
3. **Gazebo 文档** — https://gazebosim.org/docs
4. **MIT 6.141 机器人学** — https://www.youtube.com/@MITCSAIL
5. **Open Robotics 教程** — https://github.com/ros2/tutorials
6. **Hugging Face 机器人模型** — https://huggingface.co/models?pipeline_tag=robotics