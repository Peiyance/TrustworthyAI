
variable "region" {
  default = "us-east-2"
}

variable "zone" {
  default = "us-east-2a"
}

# instance type
variable "instance_type" {
  default = "t3.medium"
}

variable "bid_price" {
  default = "0.013"
}

variable "target_capacity_type" {
  default = "on-demand"
}

# Update "project_tag" to match the tagging requirement of the ongoing project
variable "project_tag" {
  default = "single-instance"
}

# Update "ami_id"
variable "ami_id" {
  default = "ami-05fb0b8c1424f266b"
}

# Update "key_name" with the key pair name for SSH connection
# Note: it is NOT the path of the pem file
# you can find it in https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#KeyPairs:sort=keyName
variable "key_name" {
  default = "aws-key1"
}

variable "eip_id" {
  default = "eipalloc-02216567b103be40a"
}
